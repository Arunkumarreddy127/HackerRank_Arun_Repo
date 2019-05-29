/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
function Polygon(a) {
    this.perimeter = function () {
        let perimete = 0;
        for (let i = 0; i < a.length; i++) {
            perimete = perimete + a[i];
        }
        return perimete;
    };
        
    
    
}
