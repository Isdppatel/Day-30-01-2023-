var idx=1;

// document.getElementById('clone_id1').insertAdjacentHTML('afterend',add_btn())
// add_btn();
function add_btn()
{
    const node = document.getElementById('clone_id1');
    const clone = node.cloneNode(true);
    // console.log(clone.childNodes);
     clone.childNodes.forEach((val) => {
        // let input=val.innerHTML;
        console.log(val);
     });
    // console.log(clone);
  
    document.getElementById('tb1').appendChild(clone);
}

function add_Work_btn()
{
    const node = document.getElementById('clone_id2');
    const clone = node.cloneNode(true);
  
    document.getElementById('tb3').appendChild(clone);
}
function add_ref()
{
    const node = document.getElementById('clone_id3');
    const clone = node.cloneNode(true);
  
    document.getElementById('tb6').appendChild(clone);
}