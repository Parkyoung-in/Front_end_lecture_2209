const score = Math.ceil(Math.random() * 100);
switch (parseInt(score/10)) {
    case 10: 
    case 9: 
        console.log(score+'점','A');
        break;
    case 8: 
        console.log(score+'점','B');
        break;
    case 7: 
        console.log(score+'점','C');
        break;
    case 6: 
        console.log(score+'점','D');
        break;
    default:
        console.log(score+'점','F');
        break;    
}