// iOS Projects
const ios_projects = [
    {
        name: "CarbonSaurus", 
        description: "CarbonSaurus is an iOS app that uses a virtual pet dinosaur to keep you climate aware.", 
        image_url: "/images/carbonsaurus_image.jpg"
    },
    {
        name: "Shrdded", 
        description: "Shrdded is an iOS app that empowers users in their local weightlifting communities via posting personal records, interacting with other lifters, and participating in competitions.", 
        image_url: "/images/shrdded.png"
    },
    {
        name: "Freelance (Fiverr)", 
        description: "Did freelance iOS development for 8 different projects and maintained a five star rating.", 
        image_url: "/images/fiverr.jpg"
    },
    {
        name: "Traverse", 
        description: "Traverse is an iOS peer-to-peer marketplace for renting appliances, equipment, electronics, and more.", 
        image_url: "/images/traverse.jpg"
    },
    {
        name: "Studia", 
        description: "Studia is an iOS app that utilizes generative AI to create study materials for students.", 
        image_url: "/images/studia.jpeg"
    },
    {
        name: "Combatibles", 
        description: "Combatible is an iOS party game app that lets two pairs of users compete on their trivia knowledge.", 
        image_url: "/images/combatibles.jpg"
    }
];

// Deep Learning Projects
const deep_learning_projects = [
    {
        name: "TxDOT ML", 
        description: "Built multimodal neural networks to classify 19 fields in vehicle crash reports, and integrated models into TxDOT's information system.", 
        image_url: "/images/txdot_interpreted_fields.png"
    }
];

// Chess Programming Projects
const chess_programming_projects = [
    {
        name: "The Haskell Engine", 
        description: "A purely functional, 1500-strength chess engine written in Haskell.", 
        image_url: "/images/haskell_chess_engine.jpg"
    },
    {
        name: "The Java Engine", 
        description: "A purely object-oriented, 2000-strength chess engine written in Java.", 
        image_url: "/images/java_chess_engine.jpg"
    },
    {
        name: "The Julia Engine", 
        description: "A 1300-strength chess engine written in Julia.", 
        image_url: "/images/julia_chess_engine.jpg"
    }
];

// Web Development Projects
const web_development_projects = [
    {
        name: "hamsterstore", 
        description: "An online marketplace for freelance hamster food vendors.", 
        image_url: "/images/hamsterstore.jpg"
    },
    {
        name: "Personal Website", 
        description: "Well - it's this website, written entirely using ExpressJS and Node.", 
        image_url: "/images/pfp.jpg"
    }
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project_card">
            <img src="${project.image_url}" alt="${project.name}" />
            <h3>${project.name}</h3>
            <p>${project.description}</p>
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