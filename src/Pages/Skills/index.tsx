import React from "react";
import "./style.css"

const Skills = () => {
    return <div id="skills" className="page bgcolor">
        <h2>Technical</h2>
        <h3>Operating Systems</h3>
        <ul className="cols-2">
            <li><img src="/assets/skills/macos.svg" />MacOS (Unix-like)</li>
            <li><img src="/assets/skills/linux.svg" />Linux (Unix-like)</li>
        </ul>
        <h3>Programming Languages</h3>
        <ul className="cols-6">
            <li><img src="/assets/skills/python.svg" />Python</li>
            <li><img src="/assets/skills/java.svg" />Java</li>
            <li><img src="/assets/skills/sql.png" />SQL</li>
            <li><img src="/assets/skills/html.svg" />HTML</li>
            <li><img src="/assets/skills/css.svg" />CSS</li>
            <li><img src="/assets/skills/javascript.svg" />JavaScript</li>
            <li><img src="/assets/skills/typescript.svg" />TypeScript</li>
            <li><img src="/assets/skills/c.svg" />C</li>
            <li><img src="/assets/skills/cplusplus.svg" />C++</li>
            <li><img src="/assets/skills/php.svg" />PHP</li>
            <li><img src="/assets/skills/kotlin.svg" />Kotlin</li>
        </ul>
        <h3>Web</h3>
        <ul className="cols-5">
            <li><img src="/assets/skills/react.svg"/>React</li>
            <li><img src="/assets/skills/nextjs.svg"/>Next.js</li>
            <li><img src="/assets/skills/flask.svg"/>Flask</li>
            <li><img src="/assets/skills/jquery.svg" />jQuery</li>
            <li><img src="/assets/skills/scrapy.svg"/>Scrapy</li>
            <li><img src="/assets/skills/spring.svg"/>Spring</li>
        </ul>
        <h3>Machine Learning</h3>
        <ul className="cols-2">
            <li><img src="/assets/skills/scikit_learn.png"/>Scikit-learn</li>
            <li><img src="/assets/skills/matplotlib.png"/>Matplotlib</li>
        </ul>
        <h3>Deep Learning</h3>
        <ul className="cols-3">
            <li><img src="/assets/skills/pytorch.svg"/>PyTorch</li>
            <li><img src="/assets/skills/keras.png"/>Keras</li>
            <li><img src="/assets/skills/tensorflow.svg"/>TensorFlow</li>
        </ul>
        <h3>Other Technologies</h3>
        <ul className="cols-4">
            <li><img src="/assets/skills/git.svg"/>Git</li>
            <li><img src="/assets/skills/docker.svg"/>Docker</li>
            <li><img src="/assets/skills/docker-compose.png"/>Docker Compose</li>
            <li><img src="/assets/skills/kubernetes.svg"/>Kubernetes</li>
            <li><img src="/assets/skills/elasticsearch.svg"/>Elasticsearch</li>
            <li><img src="/assets/skills/latex.svg"/>LaTeX</li>
            <li><img src="/assets/skills/nodejs.svg"/>Node.js</li>
            <li><img src="/assets/skills/android.svg"/>Android</li>
        </ul>
        <h2>Soft</h2>
        <h3>Strengths</h3>
        <ul className="cols-3">
            <li>Knowledge lover</li>
            <li>Open-minded</li>
            <li>Ready-to-learn</li>
            <li>Resilient</li>
            <li>Responsible</li>
            <li>Team worker</li>
        </ul>
        <h3>Languages</h3>
        <ul className="cols-2">
            <li><span>Portuguese</span>Native Language</li>
            <li><span>English</span>First Certificate in English</li>
        </ul>
    </div>
};

export default Skills;