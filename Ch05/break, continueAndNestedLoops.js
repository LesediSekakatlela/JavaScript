/*break, continue, and nested loops Page 111*/
let groups = [
    ["martin", "daniel", "keith"],
    ["margot", "marina", "ali"],
    ["helen", "jonah", "sambikos"],
];

//let's find a group with two names starting with an m
for (let i = 0; i < groups.length; i++) {
    let matches = 0;

    for (let j = 0; j < groups[i].length; j++) {
        if (groups[i][j].startsWith("m")) {
            matches++;
        } else {
            continue;
        }
        if (matches === 2) {
            console.log("Found a group with two names starting with an m:");
            console.log(groups[i]);
            break;
        }
    }
}

/*Page 112*/
for (let group of groups) {
    for (let member of group) {
        if (member.startsWith("m")) {
            console.log("found one starting with m:", member);
            break;
        }
    }
}

/*Page 113 using outer and inner*/
outer: for (let group of groups) {
    inner: for (let member of group) {
        if (member.startsWith("m")) {
            console.log("found one starting with m:", member);
            break outer;
        }
    }
}