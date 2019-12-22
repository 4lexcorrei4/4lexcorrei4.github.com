/*
max width = 80 colunas
tab = 4 spaces
01234567890123456789012345678901234567890123456789012345678901234567890123456789

secrets.c
*/

#include "Secrets.h"

/* FUNCTIONS String */


/* FUNCTIONS Byte */


/* FUNCTIONS Int2 */


/* FUNCTIONS Pixel */


/* FUNCTIONS Image */


/* ENCRYPTION */

/* ERROR MESSAGES */
#define ERROR_OPENING_FILE "File not found or invalid file '%s'"
#define ERROR_WRITING_FILE "Could not write in file '%s'"
#define ERROR_CONTAINER_SMALL "Message in file '%s' does not fit the container file"

/* CONSTANTS */
#define SPACE 0x20
#define FIRST_BIT 0x80
#define SECOND_BIT 0x40

#define BUFFER_SIZE 1024
void copy_file(String input_filename, String output_filename)
{
	FILE *toread = fopen(input_filename, "r");
	if(toread == NULL)
		error(ERROR_OPENING_FILE, input_filename);
	
	FILE *towrite = fopen(output_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, output_filename);
	
	char read;
	char buffer[BUFFER_SIZE];
	int count;
	
	while ((count = fread(buffer, 1, BUFFER_SIZE, toread)) > 0) {
		fwrite(buffer, 1, count, towrite);
	}
	
	fclose(toread);
	fclose(towrite);
}

char letters_forward(char letter, int key) {
	
	if (letter >= 'A' && letter <= 'Z') {
		char sum = letter + key;
		if (sum > 'Z')
			return 'A' + (sum - 'Z' - 1);
		else
			return sum;
	}
	return letter;
}

void cesar_encrypt(String input_filename, int key, String encrypted_filename)
{
	FILE *toread = fopen(input_filename, "r");
	if(toread == NULL)
		error(ERROR_OPENING_FILE, input_filename);
	
	FILE *towrite = fopen(encrypted_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, encrypted_filename);
	
	char read;		
	
	while ((read = fgetc(toread)) != EOF)
		fputc(letters_forward(read, key), towrite);
	
	fclose(toread);
	fclose(towrite);
}

char letters_backword(char letter, int key) {
	
	if (letter >= 'A' && letter <= 'Z') {
		char diff = letter - key;
		if (diff < 'A')
			return 'Z' - ('A' - 1 - diff);
		else
			return diff;
	}
	return letter;
}

void cesar_decrypt(String encrypted_filename, int key,
										String decrypted_filename)
{
	FILE *toread = fopen(encrypted_filename, "r");
	if(toread == NULL)
		error(ERROR_OPENING_FILE, encrypted_filename);
	
	FILE *towrite = fopen(decrypted_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, decrypted_filename);
	char read;
	
	while ((read = fgetc(toread)) != EOF)
		fputc(letters_backword(read, key), towrite);
	
	fclose(toread);
	fclose(towrite);
}

void pi_encrypt(String input_filename, String pi_filename,
										String encrypted_filename)
{
	FILE *toread = fopen(input_filename, "r");
	if(toread == NULL)
		error(ERROR_OPENING_FILE, input_filename);
	
	FILE *thekey = fopen(pi_filename, "r");
	if(thekey == NULL)
		error(ERROR_OPENING_FILE, pi_filename);
	
	FILE *towrite = fopen(encrypted_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, encrypted_filename);
	
	char read, key;
	fseek(thekey, 2, SEEK_SET);
	
	while ((read = fgetc(toread)) != EOF) {
		if (read >= 'A' && read <= 'Z') {
			if ((key = fgetc(thekey)) == EOF) {
				fseek(thekey, 2, SEEK_SET);
				key = fgetc(thekey);
			}
			key = key - '0';
			read = letters_forward(read, key);
		}
		fputc(read, towrite);
	}
	
	fclose(toread);
	fclose(thekey);
	fclose(towrite);
}

void pi_decrypt(String encrypted_filename, String pi_filename,
											String decrypted_filename)
{
	FILE *toread = fopen(encrypted_filename, "r");
	if(toread == NULL)
		error(ERROR_OPENING_FILE, encrypted_filename);
	
	FILE *thekey = fopen(pi_filename, "r");
	if(thekey == NULL)
		error(ERROR_OPENING_FILE, pi_filename);
	
	FILE *towrite = fopen(decrypted_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, decrypted_filename);
	
	char read, key;
	fseek(thekey, 2, SEEK_SET);
	
	while ((read = fgetc(toread)) != EOF) {
		if (read >= 'A' && read <= 'Z') {
			if ((key = fgetc(thekey)) == EOF) {
				fseek(thekey, 2, SEEK_SET);
				key = fgetc(thekey);
			}
			key = key - '0';
			read = letters_backword(read, key);
		}
		fputc(read, towrite);
	}
	
	fclose(toread);
	fclose(thekey);
	fclose(towrite);
}

void pack_encrypt(String input_filename, String encrypted_filename)
{
	FILE *toread = fopen(input_filename, "r");
	if(toread == NULL)
		error(ERROR_OPENING_FILE, input_filename);
	
	FILE *towrite = fopen(encrypted_filename, "wb");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, encrypted_filename);
	
	int writtenBits = 0;
	char read;
	char write = 0;
	unsigned char flag = FIRST_BIT;

	while ((read = fgetc(toread)) != EOF) {
		for (Byte forAnd = SECOND_BIT; forAnd > 0; forAnd = forAnd >> 1) {
			if ((read & forAnd) > 0)
				write |= flag;
			writtenBits++;
			flag = flag >> 1;
			if (writtenBits % 8 == 0) {
				fwrite(&write, 1, 1, towrite);
				write = 0;
				flag = FIRST_BIT;
			}
		}
	}
	
	if(writtenBits % 8 != 0)
		fwrite(&write, 1, 1, towrite);
	
	fclose(toread);
	fclose(towrite);
}

void pack_decrypt(String encrypted_filename, String decrypted_filename)
{
	FILE *toread = fopen(encrypted_filename, "r");
	if(toread == NULL)
		error(ERROR_OPENING_FILE, encrypted_filename);
	
	FILE *towrite = fopen(decrypted_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, decrypted_filename);
	
	char read, buf = 0;
	unsigned char bitSetted = FIRST_BIT, initialBit = SECOND_BIT;
	bool end = false;
	
	if((read = fgetc(toread)) == EOF)
		end = true;
	
	while (!end) {
		if(read & bitSetted)
			buf |= initialBit;
		bitSetted = bitSetted >> 1;
		initialBit = initialBit >> 1;
		if(initialBit == 0) {
			fputc(buf, towrite);
			initialBit = SECOND_BIT;
			buf = 0;
		}
		if(bitSetted == 0) {
			bitSetted = FIRST_BIT;
			if((read = fgetc(toread)) == EOF)
				end = true;
		}
	}

	fclose(toread);
	fclose(towrite);
}


/* STEGANOGRAPHY */

int fpeek(FILE *f) {
	int c;
	if( (c = fgetc(f)) != EOF )
		ungetc(c, f);  // pushes c back to stream buffer
	return c;
}

void dots_hide(String input_filename,
				String message_filename, String disguised_filename)
{
	FILE *toread = fopen(input_filename, "r");
	if(toread == NULL)
		error(ERROR_OPENING_FILE, input_filename);
	
	FILE *tohide = fopen(message_filename, "r");
	if(tohide == NULL)
		error(ERROR_OPENING_FILE, message_filename);
	
	FILE *towrite = fopen(disguised_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, disguised_filename);
	
	char read, hide;
	bool pointBefore = false, end = false, ignore = false;
	int bitToSee = 7;
	
	if( (hide = fgetc(tohide)) == EOF) {
		hide = '\0';
		end = true;
	}
	while ((read = fgetc(toread)) != EOF && hide != EOF) {
		
		if( read != SPACE ) {
			if(bitToSee < 0) {
				bitToSee = 7;
				if( (hide = fgetc(tohide)) == EOF && !end) {
					hide = '\0';
					end = true;
				}
			}
			pointBefore = false;
			if(read == '.') {
				pointBefore = true;
				ignore = false;
			}
			fputc(read, towrite);
		}
		else if( read == SPACE ) {
			if( !ignore ) {
				if( pointBefore ) {
					if( (hide >> bitToSee) & 0b01 )
						fputc(SPACE, towrite);
					bitToSee--;
					pointBefore = false;
					ignore = true;
				}
				fputc(SPACE, towrite);
			}
		}
	}
	
	if ( hide != EOF )
		error(ERROR_CONTAINER_SMALL, message_filename);
	else 
		while ( read != EOF ) {
			fputc(read, towrite);
			read = fgetc(toread);
		}
	
	fclose(toread);
	fclose(tohide);
	fclose(towrite);
}

void dots_reveal(String disguised_filename, String decoded_filename)
{
	FILE *toread = fopen(disguised_filename, "r");
	if(toread == NULL)
		error(ERROR_OPENING_FILE, disguised_filename);
	
	FILE *towrite = fopen(decoded_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, decoded_filename);
	
	char read;
	int spaces = 0, count = 0;
	int aux[8];
	bool pointBefore = false, end = false;
	
	while (((read = fgetc(toread)) != EOF) && !end) {
		if (read == '.' && fpeek(toread) == SPACE)
			pointBefore = true;
		else if( read == SPACE && pointBefore )
			spaces++;
		else
			pointBefore = false;
		
		if(!pointBefore && spaces > 0) {
			if( spaces > 2 )
				end = true;
			else if (spaces == 2)
				aux[count++] = 1;
			else
				aux[count++] = 0;
			spaces = 0;
		}
		
		if(count > 7) {
			char write = 0, flag = 0b1;
			int i;
			for(i = 7; i > 0; i--) {
				if(aux[i])
					write = write | flag;
				flag = flag << 1;
			}
			count = 0;
			if(write == '\0')
				end = true;
			else
				fputc(write, towrite);
		}
	}
	
	fclose(toread);
	fclose(towrite);
}

Int2 crude_hide(Image img, Int2 n,
					String message_filename, Image result)
{
	FILE *tohide = fopen(message_filename, "r");
	if(tohide == NULL)
		error(ERROR_OPENING_FILE, message_filename);
	
	char hide;
	bool end = false;
	int bitToSee = 7;
	
	image_copy(img, n, result);
	
	for (int y = 0; y < n.y && !end; y++) {
		for (int x = 0; x < n.x && !end; x++) {
			if( ((hide = fgetc(tohide)) != EOF) && !end)
				result[x][y].green = (Byte)hide;
			else if(hide == EOF && !end) {
				result[x][y].green = '\0';
				end = true;
			}
		}
	}
	
	if (!end)
		error(ERROR_CONTAINER_SMALL, message_filename);
	
	fclose(tohide);
	
	return n;
}

void crude_reveal(Image img, Int2 n, String decoded_filename)
{
	FILE *towrite = fopen(decoded_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, decoded_filename);
	
	char write;
	bool end = false;
	
	for (int y = 0; y < n.y && !end; y++) {
		for (int x = 0; x < n.x && !end; x++) {
			write = (char)img[x][y].green;
			if(write == '\0')
				end = true;
			else
				fputc(write, towrite);
		}
	}
	fclose(towrite);
}


Int2 image_hide(Image img, Int2 n,
					String message_filename, Image result) {
	
	FILE *tohide = fopen(message_filename, "r");
	if(tohide == NULL)
		error(ERROR_OPENING_FILE, message_filename);
	
	char hide = 0, temp = 0;
	int bitToHide = 7;
	bool end = false;
	
	image_copy(img, n, result);
	
	if((hide = fgetc(tohide)) == EOF) {
		hide = '\0';
		end = true;
	}
	
	for (int y = 0; y < n.y && hide != EOF; y++) {
		for (int x = 0; x < n.x && hide != EOF; x++) {
			for (int color = 0; color < 3 && hide != EOF; color++) {
				temp = ((Byte) hide >> bitToHide--) & 0b1;
				if (color == 0) {
					result[x][y].red &= 0xFE;
					result[x][y].red |= temp;
				} else if (color == 1) {
					result[x][y].green &= 0xFE;
					result[x][y].green |= temp;
				} else if (color == 2) {
					result[x][y].blue &= 0xFE;
					result[x][y].blue |= temp;
				}
				
				if (bitToHide < 0) {
					hide = fgetc(tohide);
					if (hide == EOF && !end) {
						hide = '\0';
						end = true;
					}
					bitToHide = 7;
				}
			}
		}
	}
	
	if (!end)
		error(ERROR_CONTAINER_SMALL, message_filename);
	
	fclose(tohide);
	
	return n;
}

void image_reveal(Image img, Int2 n, String decoded_filename) {
	
	FILE *towrite = fopen(decoded_filename, "w");
	if(towrite == NULL)
		error(ERROR_WRITING_FILE, decoded_filename);
	
	char hidden = 0, write = 0;
	int bitsRead = 0;
	bool end = false;
	
	for (int y = 0; y < n.y && !end; y++) {
		for (int x = 0; x < n.x && !end; x++) {
			for (int color = 0; color < 3 && !end; color++) {
				hidden = hidden << 1;
				if (color == 0) {
					hidden |= (img[x][y].red & 0b1);
				} else if (color == 1) {
					hidden |= (img[x][y].green & 0b1);
				} else if (color == 2) {
					hidden |= (img[x][y].blue & 0b1);
				}
				bitsRead++;
				
				if (bitsRead == 8) {
					if (hidden != '\0') {
						fputc(hidden, towrite);
						hidden = 0;
					}
					else
						end = true;
					bitsRead = 0;
				}
			}
		}
	}
	
	fclose(towrite);
}

