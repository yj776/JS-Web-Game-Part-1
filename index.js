function newImage(imgSource, leftPosition, bottomPosition){
    let imgName = document.createElement('img')
    imgName.src = 'assets/' + imgSource
    imgName.style.position = 'fixed'
    imgName.style.left = leftPosition + 'px'
    imgName.style.bottom = bottomPosition + 'px'
    document.body.append(imgName)
}

newImage('green-character.gif', 100,100)
newImage('pine-tree.png', 450, 200)
newImage('tree.png', 200, 300)
newImage('pillar.png', 350, 100)
newImage('crate.png', 150, 200)
newImage('well.png', 500, 425)

function newItem(itemSource,leftPosition,bottomPosition){
    let itemName = document.createElement('img')
    itemName.src = 'assets/' + itemSource 
    itemName.style.position = 'fixed'
    itemName.style.left = leftPosition + 'px'
    itemName.style.bottom = bottomPosition + 'px'
    document.body.append(itemName)

    itemName.addEventListener('dblclick',function(){
        itemName.remove()
    })
}

newItem('sword.png',500,405)
newItem('sheild.png',200, 500)
newItem('staff.png',100,400)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })

//Bonus:


