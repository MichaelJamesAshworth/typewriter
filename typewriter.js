const sentence = "hello there from lighthouse labs\n";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 100);
}



//convert sentance string to array
//loop over each element
//run settimeout over each element