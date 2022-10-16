interface TeamProps {
    name: string
    role: string
    description1: string
    description2: string
}

const EDMUND: TeamProps = {
    name: 'EDMUND',
    role: '3D ARTIST',
    description1: 'Experienced 3D Artist with varying expertise from game art, video editing and commercials to VFX!',
    description2: 'Anchoring project from art concept and direction to modelling of 3D Bobots.'
};

const THEON: TeamProps = {
    name: 'THEON',
    role: ' WEB DEV / FOUNDER',
    description1: 'Artist turned software engineer. Ranging experience from 3D Art to custom 3D Engines and web development.',
    description2: 'Directing overall project direction and building the website you see now.'
};

const FARZAANA: TeamProps = {
    name: 'FARZAANA',
    role: 'WEB3 DEVELOPER',
    description1: 'Artist turned software engineer, from 3D game art to creating custom game engines.',
    description2: 'Currently helming as a Blockchain and Smart Contracts Developer.'
};

const ELSTON: TeamProps = {
    name: 'ELSTON',
    role: 'MARKETING',
    description1: 'Online marketing professional with many years of sales background moving into the NFT space.',
    description2: 'Strong belief in taking the NFT community to the next level.'
};

const YIEN: TeamProps = {
    name: 'YIEN',
    role: 'GAME PROGRAMMER',
    description1: 'Experienced Unity Game Programmer with years under his belt.',
    description2: 'Coding up the multiplayer component and gameplay aspects of the project. He regards himself as a NPC in real life.'
};

const KEFF: TeamProps = {
    name: 'KEFF',
    role: 'GAME DESIGNER',
    description1: 'Many years dabbling in both music and game design.',
    description2: 'Leading the game development for the best player experience.'
};

const SHERMAN: TeamProps = {
    name: 'SHERMAN',
    role: 'GAME PROGRAMMER',
    description1: 'Unity developer and game designer that has worked on both commercial game engines and custom engines.',
    description2: 'Innovating and honing the Bobots experience.'
};

const QIWEN: TeamProps = {
    name: 'QI WEN',
    role: 'WEB DEVELOPER',
    description1: 'Assisting in web development and linking up smart contracts with Unity code for Metamask transactions.',
    description2: 'Likes bouldering and swimming in his free time.'
};

const RYAN: TeamProps = {
    name: 'RYAN',
    role: '3D ARTIST',
    description1: '3D Modeler with experience in game asset creation.',
    description2: ' Currently assisting with the construction of bobots.'
};

export type { TeamProps as ProjectProps };
export const TEAM_MEMBERS: TeamProps[] = [
    EDMUND, THEON, FARZAANA, ELSTON, YIEN,
    KEFF, SHERMAN, QIWEN, RYAN
];