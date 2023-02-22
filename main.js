let column_1 = [5, 5, 0, 7, 2, 8, 10, 1, 6, 3, 2, 9, 8, 10, 7, 4, 1, 10, 5, 7, 6, 9, 3, 4, 6, 1, 4, 8, 2, 3];
let column_2 = [2, 7, 3, 5, 1, 5, 9, 8, 9, 7, 10, 6, 8, 2, 1, 6, 10, 2, 4, 1, 8, 10, 9, 4, 5, 6, 3, 2, 7, 4];
let column_3 = [93, 62, 60, 85, 52, 81, 80, 71, 75, 76, 92, 57, 76, 62, 70, 92, 99, 61, 49, 81, 48, 63, 47, 89, 90, 65, 87, 97, 95, 76];
let column_4 = [92, 65, 85, 54, 97, 79, 64, 69, 67, 90, 88, 92, 64, 99, 95, 94, 92, 77, 60, 88, 45, 75, 77, 56, 44, 74, 77, 49, 91, 73];

let sum_1 = 0;
for (let i = 0; i < 30; i++){
    sum_1 += column_1[i];        
} 
let sum_2 = 0;
for (let i = 0; i < 30; i++){
    sum_2 += column_2[i];        
}
let sum_3 = 0;
for (let i = 0; i < 30; i++){
    sum_3 += column_3[i];        
} 
let sum_4 = 0;
for (let i = 0; i < 30; i++){
    sum_4 += column_4[i];
} 

let sums = [sum_1,sum_2,sum_3,sum_4];

let total_score = sum_1 + sum_2 + sum_3 + sum_4;

const results = {
col1: column_1,  
col2: column_2,    
col3: column_3,  
col4: column_4,  
sums: sums,  
total_score: total_score,  
};

