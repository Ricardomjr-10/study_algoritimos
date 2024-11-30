let ans = 0;
function findMaxValUtil(arr, n, num, maxLimit, ind)
{
	
	
	if (ind == n) 
	{
		ans = Math.max(ans, num);
		return;
	}

	
	if (num - arr[ind] >= 0)
	{
		findMaxValUtil(arr, n, num - arr[ind], 
					maxLimit, ind + 1);
	}

	if (num + arr[ind] <= maxLimit)
	{
		findMaxValUtil(arr, n, num + arr[ind], 
					maxLimit, ind + 1);
	}
}


function findMaxVal(arr, n, num, maxLimit)
{
	

	let ind = 0;

	findMaxValUtil(arr, n, num, maxLimit, ind);

	return ans;
}


// let num = 3;
// let arr = [ 2, 1, 7];
// let n = arr.length;
// let maxLimit = 7;


// console.log(findMaxVal(arr, n, num, maxLimit));
							
module.exports = findMaxVal