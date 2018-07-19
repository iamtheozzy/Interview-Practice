// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];

    for(let element of array){
        //finds the last item in new chunked arrray
        const last = chunked[chunked.length - 1];

        //if no item exist or the the size of last item is the length of 'size' argument push new array into chunked
        if(!last || last.length === size){
            chunked.push([element]);
        //otherwise push element into last item
        } else {
            last.push(element);
        }
    }
    return chunked;
}

module.exports = chunk;
