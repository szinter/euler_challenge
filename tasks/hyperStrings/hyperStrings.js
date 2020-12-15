module.exports = {
    hyperStrings
}

function hyperStrings(m, H) {
    const cleansed = H.filter(_ => _.length <= m);
    let combinations = [];
    for ( let i = 1; i < m + 1; i++)
        combinations = [...combinations, ...combRep(cleansed, i)];
    let bell = [];

    for(let i = 0; i < combinations.length; i++) {
        bell = [...bell, ...getAnagrams(combinations[i])];
    }
    bell = bell.reduce((res, _) => _.join('').length < m + 1 ? [...res, _.join('')] : res, []);
    const bela = new Set([...bell, '']);

    return bela.size;
}

function getAllSubsets(collection) {
    return collection.reduce((subsets, value) => subsets.concat(
            subsets.map(set => [value, ...set])
        ),
        [[]]
    )
}

function swap(collection,i, j) {
    let tmp = collection[i];
    collection[i] = collection[j];
    collection[j] = tmp;
}

function permutations(bell, n, A) {
    if (n === 1) {
        bell.push(A.slice())
    } else {
        for(let i = 0; i < n - 1; i++) {
            permutations(bell, n-1, A.slice());
            if (!(n % 2)) {
                swap(A, i, n - 1);
            } else {
                swap(A, 0, n - 1);
            }
        }
        permutations(bell, n - 1, A.slice())
    }
}

function getAnagrams(input) {
    var counter = [],
        anagrams = [],
        chars = input,
        length = chars.length,
        i;

    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }

    anagrams.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars);
        } else {
            counter[i] = 0;
            i++;
        }
    }

    return anagrams;
}
/* HEAP
procedure generate(n : integer, A : array of any):
    if n = 1 then
          output(A)
    else
        for i := 0; i < n - 1; i += 1 do
            generate(n - 1, A)
            if n is even then
                swap(A[i], A[n-1])
            else
                swap(A[0], A[n-1])
            end if
        end for
        generate(n - 1, A)
    end if
*/

function combRep(arr, l) {
    if(l === void 0) l = arr.length; // Length of the combinations
    var data = Array(l),             // Used to store state
        results = [];                // Array of results
    (function f(pos, start) {        // Recursive function
      if(pos === l) {                // End reached
        results.push(data.slice());  // Add a copy of data to results
        return;
      }
      for(var i=start; i<arr.length; ++i) {
        data[pos] = arr[i];          // Update data
        f(pos+1, i);                 // Call f recursively
      }
    })(0, 0);                        // Start at index 0
    return results;                  // Return results
  }