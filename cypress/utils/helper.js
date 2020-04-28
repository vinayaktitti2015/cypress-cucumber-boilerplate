
export const getArrayRandomelement = (arr) => {
    if (arr && arr.length) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

export const randomGenerator = (number) => {
    return Math.floor(Math.random() * (number))
}

export const selectRandomDropdownValue = (randomelement) => {
    cy.get(randomelement).its('length').then(($length) => {
        const list = randomGenerator($length);
        cy.get(randomelement)
            .eq(list)
            .then(elem => {
                cy.get('#lister-sort-by-options')
                    .select(elem.val());
            })
    })
};

export const clickRandomElementByIndex = (randomelement) => {
    cy.get(randomelement).its('length').then(($length) => {
        const list = randomGenerator($length);
        console.log('listno', list)
        cy.get(randomelement)
            .eq(list)
            .then($elem => {
                cy.wrap($elem).click();
            })
    })
}


