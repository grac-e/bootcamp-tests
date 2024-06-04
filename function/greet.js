function greet(neighbourName) {
    if (neighbourName == "") {
        return "please enter name"
    }
    return 'Hello, ' + neighbourName;
}

console.log(greet('Janine'))