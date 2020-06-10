export const checkBudget = (budget, remanent) => {
    let clase;

    if((budget / 4) > remanent) {
        clase = "alert alert-danger";
    } else if ((budget / 2) > remanent) {
        clase = "alert alert-warning";
    } else {
        clase = "alert alert-success";
    }

    return clase;
};