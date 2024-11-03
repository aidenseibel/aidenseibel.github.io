// iOS Projects
const ios_projects = [
    {
        name: "Rowdypay", 
        description: "*RowdyHacks 2024 First Place Overall Winner!* Rowdypay allows groups of users to manage shared budgets. Users can scan receipts to send automatic payment requests to a shared budget.", 
        image_url: "./images/rowdypay.jpg",
        project_url: "https://devpost.com/software/rowdypay",
        tech_stack: "SwiftUI, REST API, Rust"
    },
    {
        name: "Carbonsaurus", 
        description: "*RowdyHacks 2023 3rd Place, Best Design Winner!* A customizable pet dinosaur keeps users climate aware using a carbon diary, news, quizzes, and more. 100+   downloads on the App Store.", 
        image_url: "./images/carbonsaurus.jpg",
        project_url: "https://devpost.com/software/carbonsaurus",
        tech_stack: "SwiftUI"
    },
    {
        name: "Freelance (Fiverr)", 
        description: "Private contracts ranging from extensive apps to small bugfixing. Maintained a five star rating across 12 projects in six months.", 
        image_url: "./images/fiverr.jpg",
        project_url: "https://www.fiverr.com/ajs2003?up_rollout=true",
        tech_stack: "SwiftUI, Firebase, UIKit"
    },
    {
        name: "Traverse", 
        description: "A peer-to-peer marketplace for renting appliances, equipment, electronics, and more.", 
        image_url: "./images/traverse.jpg",
        project_url: "https://github.com/aidenseibel/Traverse-SwiftUI",
        tech_stack: "SwiftUI, Firebase"
    },
    {
        name: "Shrdded", 
        description: "Local weightlifting communities can share their personal records, interact with other lifters, and participate in competitions.", 
        image_url: "./images/shrdded.png",
        project_url: "https://devpost.com/software/shrdded",
        tech_stack: "SwiftUI, Firebase"
    },
    {
        name: "Combatible", 
        description: "Friends and family test their knowledge of each other in a fast-paced trivia game.", 
        image_url: "./images/combatibles.jpg",
        project_url: "https://github.com/aidenseibel/combatible",
        tech_stack: "SwiftUI, Azure, Django"
    },
];

// Deep Learning Projects
const deep_learning_projects = [
    {
        name: "Interpreted Fields", 
        description: "Built multimodal neural networks for classification, saving TxDOT $900,000 USD per year from private contractor.", 
        image_url: "./images/txdot_interpreted_fields.png",
        project_url: "",
        tech_stack: "Python, Tensorflow, Pandas, AWS"
    },
    {
        name: "The Python Engine", 
        description: "An 1800-strength Python chess engine. Utilized convolutional neural networks to approximate an evaluation function.", 
        image_url: "./images/python_chess_engine.jpg",
        project_url: "https://github.com/ABatraCS/Chess-Engine",
        tech_stack: "Python, Tensorflow"
    },
];

// Chess Programming Projects
const chess_programming_projects = [
    {
        name: "The Python Engine", 
        description: "An 1800-strength Python engine. Utilized convolutional neural networks to approximate an evaluation function.", 
        image_url: "./images/python_chess_engine.jpg",
        project_url: "https://github.com/ABatraCS/Chess-Engine",
        tech_stack: "Python, Tensorflow"
    },
    {
        name: "The Java Engine", 
        description: "A purely object-oriented, 2000-strength chess engine written in Java.", 
        image_url: "./images/java_chess_engine.jpg",
        project_url: "https://github.com/LeviBetsy/HalloqueensGambit",
        tech_stack: "Java, Rest API"
    },
    {
        name: "The Haskell Engine", 
        description: "A purely functional, 1500-strength chess engine written in Haskell.", 
        image_url: "./images/haskell_chess_engine.jpg",
        project_url: "https://github.com/TU-CSCI2322-FL23/solver-halloqueensgambit",
        tech_stack: "Haskell"
    },
    {
        name: "The Julia Engine", 
        description: "A 1300-strength chess engine written in Julia.", 
        image_url: "./images/julia_chess_engine.jpg",
        project_url: "https://github.com/aidenseibel/julia-chess",
        tech_stack: "Julia"
    },

];

// Web Development Projects
const web_development_projects = [
    {
        name: "hamsterstore", 
        description: "An online marketplace for freelance hamster food vendors.", 
        image_url: "./images/hamsterstore.jpg",
        project_url: "https://github.com/aidenseibel/pet-store",
        tech_stack: "ExpressJS, Node, MySQL"
    },
    {
        name: "Personal Website", 
        description: "Well - it's this website. Converted from ExpressJS / Node", 
        image_url: "./images/pfp.jpg",
        project_url: "https://aidenseibel.github.io/",
        tech_stack: "HTML, JS, CSS"
    }
];

// Function to create project cards
function createProjectCard(project) {
    if(project.name == "Carbonsaurus" || project.name == "Rowdypay"){
        project_card_class = "big_project_card_container"
    }else{
        project_card_class = "project_card_container"
    }

    return `
        <a href="${project.project_url}" target="_blank" rel="noopener noreferrer" class="${project_card_class}">
            <div class="project_card_image_container">
                <img src="${project.image_url}" alt="${project.name}" />
            </div>

            <div class="project_card_text_container">
                <h2>${project.name}</h2>
                <p style="overflow: hidden; text-overflow: ellipsis;">${project.description}</p>
                <p style="overflow: hidden; text-overflow: ellipsis;">Tech Stack: ${project.tech_stack}</p>
            </div>
        </a>
    `;
}

// Function to load and display projects
function loadProjects() {
    // Load iOS Projects
    const iosContainer = document.getElementById('ios-projects');
    ios_projects.forEach(project => {
        iosContainer.innerHTML += createProjectCard(project);
    });

    // Load Chess Programming Projects
    const chessContainer = document.getElementById('chess-projects');
    chess_programming_projects.forEach(project => {
        chessContainer.innerHTML += createProjectCard(project);
    });

    // Load Deep Learning Projects
    const dlContainer = document.getElementById('dl-projects');
    deep_learning_projects.forEach(project => {
        dlContainer.innerHTML += createProjectCard(project);
    });

    // Load Web Development Projects
    const webContainer = document.getElementById('web-projects');
    web_development_projects.forEach(project => {
        webContainer.innerHTML += createProjectCard(project);
    });
}

// Load projects when the page is ready
document.addEventListener('DOMContentLoaded', loadProjects);