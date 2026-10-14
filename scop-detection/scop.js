
// ===================================
// 1. Select HTML Elements
// ===================================

const topicButtons = document.querySelectorAll(".scop-but");

const topicTitle = document.querySelector("#topic-title");
const topicDescription = document.querySelector("#topic-description");

const codeDisplay = document.querySelector("#code-display");
const output = document.querySelector("#output");

const runButton = document.querySelector("#run-btn");
const resetButton = document.querySelector("#reset-btn");


// ===================================
// 2. Store Scope Examples
// ===================================

const examples = {

    // Global Scope
    global: {
        title: "Global Scope Example",

        description:
            "Variables declared outside a function can be accessed inside that function.",

        code: `let globalMessage = "Hello from Global Scope!";

function showMessage() {
    console.log(globalMessage);
}

console.log(globalMessage);
showMessage();`,

        run: function () {
            let globalMessage = "Hello from Global Scope!";

            function showMessage() {
                return globalMessage;
            }

            return [
                globalMessage,
                showMessage()
            ];
        }
    },


    // Function Scope
    function: {
        title: "Function Scope Example",

        description:
            "Variables declared inside a function can be accessed within that function.",

        code: `function testScope() {
    let localMessage = "I am local";
    console.log(localMessage);
}

testScope();`,

        run: function () {
            function testScope() {
                let localMessage = "I am local";
                return localMessage;
            }

            return [testScope()];
        }
    },


    // Block Scope
    block: {
        title: "Block Scope Example",

        description:
            "Variables declared with let and const inside a block stay within that block.",

        code: `if (true) {
    let blockMessage = "Inside block";
    console.log(blockMessage);
}

// blockMessage is not accessible here`,

        run: function () {
            if (true) {
                let blockMessage = "Inside block";
                return [blockMessage];
            }
        }
    },


    // Lexical Scope
    lexical: {
        title: "Lexical Scope Example",

        description:
            "An inner function can access variables from its outer function.",

        code: `function outer() {
    let message = "Hello from outer";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();`,

        run: function () {
            function outer() {
                let message = "Hello from outer";

                function inner() {
                    return message;
                }

                return inner();
            }

            return [outer()];
        }
    },


    // Hoisting
    hoisting: {
        title: "Hoisting Example",

        description:
            "A var declaration is hoisted and initialized with undefined.",

        code: `console.log(age);

var age = 21;

console.log(age);`,

        run: function () {
            var age;

            const results = [String(age)];

            age = 21;

            results.push(String(age));

            return results;
        }
    },


    // Temporal Dead Zone
    tdz: {
        title: "Temporal Dead Zone Example",

        description:
            "Accessing a let variable before initialization causes a ReferenceError.",

        code: `try {
    console.log(studentName);

    let studentName = "Rahul";
} catch (error) {
    console.log(error.name);
}`,

        run: function () {
            try {
                throw new ReferenceError(
                    "Cannot access 'studentName' before initialization"
                );
            } catch (error) {
                return [error.name + ": " + error.message];
            }
        }
    }

};


// ===================================
// 3. Display Selected Example
// ===================================

let currentTopic = "global";

function showExample(topic) {

    const example = examples[topic];

    if (!example) {
        return;
    }

    currentTopic = topic;

    topicTitle.textContent = example.title;

    topicDescription.textContent =
        example.description;

    codeDisplay.textContent = example.code;

    output.replaceChildren();

    const message = document.createElement("p");

    message.textContent =
        "Click Run Code to see the output.";

    output.appendChild(message);

    // Highlight selected button
    topicButtons.forEach(function (button) {
        button.classList.toggle(
            "active",
            button.dataset.topic === topic
        );
    });
}


// ===================================
// 4. Run Code Button
// ===================================

function runExample() {

    output.replaceChildren();

    try {
        const results = examples[currentTopic].run();

        results.forEach(function (result) {

            const line = document.createElement("p");

            line.textContent = String(result);

            line.classList.add("success");

            output.appendChild(line);

        });

    } catch (error) {

        const errorLine = document.createElement("p");

        errorLine.textContent =
            error.name + ": " + error.message;

        errorLine.classList.add("error");

        output.appendChild(errorLine);

    }

}


// ===================================
// 5. Topic Button Events
// ===================================

topicButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedTopic = button.dataset.topic;

        showExample(selectedTopic);

    });

});


// ===================================
// 6. Reset Button
// ===================================

function resetExample() {

    showExample("global");

}

runButton.addEventListener("click", runExample);

resetButton.addEventListener("click", resetExample);


// ===================================
// 7. Initialize Application
// ===================================

showExample("global");

