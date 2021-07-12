
let target = document.createElement('div');
target.className = "target";
target.textContent = "Target Font Size";

document.body.append(target);

let fontSizeCounter = document.createElement('div');
fontSizeCounter.className = "wrap";

document.body.append(fontSizeCounter);

const getFontSize = (item)=> 
{
	let compStyles = window.getComputedStyle(item);

	fontSizeCounter.textContent ='current Font Size :' + compStyles.getPropertyValue('font-size') ;

}

getFontSize(target);

window.addEventListener('resize', () => {

	getFontSize(target);

});