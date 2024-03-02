import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vstodo" is now active!');

	context.subscriptions.push(
	 vscode.commands.registerCommand('vstodo.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vstodo!');
	}));

	vscode.commands.registerCommand('vstodo.askQuestion',()=>{
		vscode.window.showInformationMessage('How was your day','good','bad');
	});
}

export function deactivate() {}
