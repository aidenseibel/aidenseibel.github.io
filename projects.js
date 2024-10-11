// iOS Projects
const ios_projects = [
    {
        name: "CarbonSaurus", 
        description: "RowdyHacks 2024 Winner. A virtual pet dinosaur keeps users climate aware using a carbon diary, avatar customization, daily quizzes and lessons, and more.", 
        image_url: "./images/carbonsaurus_image.jpg"
    },
    {
        name: "Freelance (Fiverr)", 
        description: "Private contracts ranging from extensive apps to small bugfixing. Maintained a five star rating across 12 projects in six months.", 
        image_url: "./images/fiverr.jpg"
    },
    {
        name: "Traverse", 
        description: "A peer-to-peer marketplace for renting appliances, equipment, electronics, and more.", 
        image_url: "./images/traverse.jpg"
    },
    {
        name: "Shrdded", 
        description: "Local weightlifting communities can share their personal records, interact with other lifters, and participate in competitions.", 
        image_url: "./images/shrdded.png"
    },
    {
        name: "Studia", 
        description: "Generative AI and OCR helps students create study materials for their university classes.", 
        image_url: "./images/studia.jpeg"
    },
    {
        name: "Combatibles", 
        description: "Friends and family test their knowledge of each other in a fast-paced trivia game.", 
        image_url: "./images/combatibles.jpg"
    },
];

// Deep Learning Projects
const deep_learning_projects = [
    {
        name: "Interpreted Fields", 
        description: "Built multimodal neural networks (Tensorflow/Keras) for classification within TxDOT's information system. Saved $900,000 USD per year from private contractor.", 
        image_url: "./images/txdot_interpreted_fields.png"
    }
];

// Chess Programming Projects
const chess_programming_projects = [
    {
        name: "The Python Engine", 
        description: "An 1800-strength Python engine. Utilized convolutional neural networks to approximate an evaluation function.", 
        image_url: "./images/python_chess_engine.jpg"
    },
    {
        name: "The Java Engine", 
        description: "A purely object-oriented, 2000-strength chess engine written in Java.", 
        image_url: "./images/java_chess_engine.jpg"
    },
    {
        name: "The Haskell Engine", 
        description: "A purely functional, 1500-strength chess engine written in Haskell.", 
        image_url: "./images/haskell_chess_engine.jpg"
    },
    {
        name: "The Julia Engine", 
        description: "A 1300-strength chess engine written in Julia.", 
        image_url: "./images/julia_chess_engine.jpg"
    },

];

// Web Development Projects
const web_development_projects = [
    {
        name: "hamsterstore", 
        description: "An online marketplace for freelance hamster food vendors.", 
        image_url: "./images/hamsterstore.jpg"
    },
    {
        name: "Personal Website", 
        description: "Well - it's this website. Converted from ExpressJS / Node", 
        image_url: "./images/pfp.jpg"
    }
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project_card_container">
            <div class="project_card_image_container">
                <img src="${project.image_url}" alt="${project.name}" />
            </div>

            <div class="project_card_text_container">
                <h2>${project.name}</h2>
                <p style="overflow: hidden; text-overflow: ellipsis;">${project.description}</p>
            </div>
        </div>
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
    const dlContainer = document.getElementById('dl-web-projects');
    deep_learning_projects.forEach(project => {
        dlContainer.innerHTML += createProjectCard(project);
    });

    // Load Web Development Projects
    web_development_projects.forEach(project => {
        dlContainer.innerHTML += createProjectCard(project);
    });
}

// Load projects when the page is ready
document.addEventListener('DOMContentLoaded', loadProjects);