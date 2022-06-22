"use strict";

// 1 вариант
for (let i = 2; i == 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}

// 2 вариант

for (let i = 2; i == 10; i++) {
    if (i % 2 == 1) {
        continue;
    } else { 
        alert ( i ); 
    }
}
