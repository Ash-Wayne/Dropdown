import './styles.css';
import { addClickDropdownCapability, addHoverDropdownCapability } from './dropdown';

const hamburgerIcon = document.getElementById('hamburger-icon');
const foodItems = document.getElementById('food-items');
const kebabIcon = document.getElementById('kebab-icon');
const stationary = document.getElementById('stationary');
const meatballsIcon = document.getElementById('meatballs-icon');
const drinks = document.getElementById('drinks');
const fruitsHeader = document.getElementById('fruits-header');
const fruits = document.getElementById('fruits');

addClickDropdownCapability(hamburgerIcon, foodItems, { left: '-30px' });

addHoverDropdownCapability(kebabIcon, stationary, { left: '-30px' });

addClickDropdownCapability(meatballsIcon, drinks, { left: '-30px' });

addHoverDropdownCapability(fruitsHeader, fruits, { left: '-15px' });
