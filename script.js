const menuItems = document.querySelectorAll('nav ul li a');
console.log(menuItems);


menuItems.forEach(item =>{
if (item.href === window.location.href){
    item.classList.add('selected');
    console.log(`${item}  is selected`);
} else {
    item.classList.remove('selected');
}
})