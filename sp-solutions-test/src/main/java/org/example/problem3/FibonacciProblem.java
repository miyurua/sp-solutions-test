package org.example.problem3;

import java.util.ArrayList;
import java.util.List;

public class FibonacciProblem {
    public static void main(String[] args) {
        //num1 -> 0, num2 ->1
        //next -> [0]+[1] then [[1][2]]
        //method - should take in the number of iterations needed
        // i -> [0, 1]
        // i -> [0, 1, 1]
        System.out.println(fibonacciList(3));

    }

    private static List fibonacciList(int numOfIterations){
        List<Integer> fibList = new ArrayList<Integer>();
        int num1 = 0;
        int num2 = 1;

        for(int i=0; i<numOfIterations; i++){
            int nextNum;

            if (i==0) {
                fibList.add(num1);
                fibList.add(num2);
            }
            else {
                nextNum = num1 + num2;
                fibList.add(nextNum);
                num1 = num2;
                num2 = nextNum;
            }
        }

        return fibList;
    }
}
