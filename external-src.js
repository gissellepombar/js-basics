const clog = (label, log) => {console.log(`${label}: ${log}`);
};
module.exports = clog;

const person = {
    fname: 'hoho'
}
//export object via 
module.exports.objectNameOfYourChoice = person
