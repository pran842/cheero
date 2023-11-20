// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// function for fetching data such as fun facts, quotes, memes etc from API's
//   async function fetchData(target, options){
//       	// creating a fetch request and awaiting it till the response comes 
// 		const fetch_data = await fetch(target, options);
// 		// storing the value of the response into a varibale named results
// 		const results = await fetch_data.json();
// 		// running some tests to check the values
// 		console.log(results);
// 	}
// 	// calling the function
// 	fetchData("https://api.api-ninjas.com/v1/facts?limit=1", {
// 		method: "GET",
// 		Headers:{
// 			"Content-Type": "application/json",
// 			'X-Api-Key': '29HJLMwf/CIbNzCrotCdeg==zcSSdlplDXBGqHMx'
// 		}
	// })
     let html = `<!DOCTYPE html>
	 <html lang="en">
	 <head>
		 <meta charset="UTF-8">
		 <meta name="viewport" content="width=device-width, initial-scale=1.0">
		 <title>Cat Coding</title>
	 </head>
	 <body>
		 <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
	 </body>
	 </html>`;
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "cheero" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('cheero.helloWorld', function () {
		// The code you place here will be executed every time your command is executed
		const panel = vscode.window.createWebviewPanel(
			'catCoding', // Identifies the type of the webview. Used internally
			'Cheer.io', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{}
			
			) // Webview options. More on these later.
			panel.webview.html = html;
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from cheero!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
