package org.example.problem4;

import java.util.Arrays;
import java.util.Collections;

import static java.lang.Integer.parseInt;

public class LargestPossibleNumber {
    public static void main(String[] args) {
        Integer[] nums = {2, 99, 22, 34, 10};

        System.out.println(largestNum(nums));
    }

    public static int largestNum(Integer[] nums){
        int lNum = 0;
        String numStr = "";
        // largest combination approach
        // sort arr in desc order
        // add all nums in desc order
        Arrays.sort(nums, Collections.reverseOrder());
        System.out.println(Arrays.toString(nums));
        for(int num: nums){
            numStr += num;
        }
        lNum = parseInt(numStr);

        return lNum;
    }

}
