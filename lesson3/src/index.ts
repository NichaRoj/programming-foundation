/**
 * Let's learn functional programming!
 * In object-oriented programming, the object is passed around different parts of the program,
 * and its properties are changed depending on what's being done with the object.
 * That means that this object is being 'mutated'.
 *
 * Functional programming is kinda the opposite of that. Its aim is to have the object 'immutable'.
 * Why? To avoid 'race condition' that happens even in single thread program.
 *
 * Now, let's look at some terms in functional programming.
 * - Pure Functions
 * - Shared State
 * - Immutability
 * - Side Effects
 */

/**
 * So what's Pure Function?
 * It is basically a mathematical function.
 * The same input will always give the same output.
 */

const double = (x) => x * 2;

/**
 * The benefit of pure functions is that it's easy to make sense,
 * and consequently, easy to test.
 *
 * Unlike in OOP where you'd need to know the entire history to make sense of the result.
 */

class Money {
  private currentAmount;

  public double = () => (this.currentAmount = this.currentAmount * 2);
}

/**
 * As you can see, we cannot track the 'currentAmount'
 *
 * Next is the 'Shared State'.
 * In OOP, objects are usually 'shared' since it is passed around and views would refer to them.
 * However, it is vulnerable to 'race condition' so in functional programming, it tries to avoid using shared states.
 *
 * Next is immutability. Immutability means that a variable is permanent and unchanged.
 * Let's look at an example.
 */

const arr1 = [1, 2, 3];

for (let i in arr1) {
  arr1[i] = arr1[i] * 2;
}

/**
 * Although it uses 'const', arr1 is not immutable because the values inside can be changed.
 * Which is why in functional programming, pure functions are used and in these functions,
 * the inputs aren't changed.
 */

const arr2 = [1, 2, 3];
const arr3 = arr2.map((each) => each * 2);

console.log(`arr2: ${arr2}`);
console.log(`arr3: ${arr3}`);

/**
 * This way, even if there is another part of the program using arr2 at the same time, the value won't change
 * and race condition won't happen.
 *
 * Next, 'Side Effects' are changes in addition to returned values.
 * Examples are making API calls. Whether storing data in database or calling for data, there will be changes that
 * are unpredictable because it depends on outside source.
 * Again, functional programming will avoid that.
 */
