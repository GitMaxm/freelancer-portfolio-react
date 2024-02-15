import gitHubIcons from './gitHub-black.svg'

const BtnGitHub = ({ gitHubLink }) => {
    return (
        <a href={gitHubLink} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubIcons} alt="GitHub" />
            GitHub repo
        </a>
    );
}

export default BtnGitHub;