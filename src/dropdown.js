import './dropdownstyle.css';

export function addClickDropdownCapability(target, contents, horizontalLocationOfContents) {
	positionContents(contents, horizontalLocationOfContents);

	let menuIsOpen = false;

	target.addEventListener('click', e => {
		if (!menuIsOpen) {
			contents.classList.remove('hidden');
			menuIsOpen = true;
			e.stopPropagation();
		}
	});

	window.addEventListener('click', () => {
		if (menuIsOpen) {
			contents.classList.add('hidden');
			menuIsOpen = false;
		}
	});
}

export function addHoverDropdownCapability(target, contents, horizontalLocationOfContents) {
	positionContents(contents, horizontalLocationOfContents);

	target.addEventListener('mouseenter', () => {
		contents.classList.remove('hidden');
	});

	target.addEventListener('mouseleave', () => {
		if (!contents.matches(':hover')) {
			contents.classList.add('hidden');
		}
	});

	contents.addEventListener('mouseleave', () => {
		contents.classList.add('hidden');
	});
}

function positionContents(contents, horizontalLocationOfContents) {
	contents.classList.add('vertical-position');
	contents.setAttribute(
		'style',
		`${Object.keys(horizontalLocationOfContents)[0]}: ${
			Object.values(horizontalLocationOfContents)[0]
		};`
	);
}
