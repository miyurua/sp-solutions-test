package org.example.problem5;

public class AllCombinationPossibilities {

    public static void main(String[] args) {
        int x=0;
        int y=0;
        int [] nums = {1, 2, x, y, 9};
        final int SUM = 100;

        //approach
        //check if the numbers 100
        //assign suitable values to x and y till [..+x+y+..+9] = 100

        for (int num: nums){
            int numSum = 0;
            numSum += num;
//            while(numSum != 100){
//                x++;
//                y++;
//            }

        }

    }


}
