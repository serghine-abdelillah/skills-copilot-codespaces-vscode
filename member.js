function skillsMember() {
    var member = {
        name: 'Raj',
        age: 25,
        skills: ['C', 'C++', 'Java', 'Python']
    };
    var memberSkills = member.skills;
    for (var i = 0; i < memberSkills.length; i++) {
        console.log(memberSkills[i]);
    }
}