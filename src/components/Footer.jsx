// Init
import React from 'react';
import GitHub from '../assets/github.svg';

// Component
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerCopyright">
        <h3>
          © Farhan Shakir <span> Resume Design</span>
        </h3>
        <p>Like my resume design? Its yours! 🚀 Get the code on GitHub:</p>
      </div>
      <div className="footerGithubDiv">
        <div className="footerGitIcon">
          <img src={GitHub} alt="GitHub" />
        </div>
        <div className="footerGitTextDiv">
          <p>
            Just remember to credit <span> Farhan Shakir</span> when you use it. Lets share the
            creative love!
          </p>
          <a href="asd">GitHub Repository Link</a>
        </div>
      </div>
    </div>
  );
}
