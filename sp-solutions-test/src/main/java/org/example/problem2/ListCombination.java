package org.example.problem2;

import java.util.ArrayList;
import java.util.List;

public class ListCombination {
    public static void main(String[] args) {
        char[] letters = {'a', 'b', 'c'};
        int[] nums = {1, 2, 3};

        System.out.println(listCombinator(letters, nums));
    }

    public static List listCombinator(char[] letters, int[] nums){
        List finalList = new ArrayList<>();
        for(int i=0; i<nums.length; i++){
            finalList.add(letters[i]);
            finalList.add(nums[i]);
        }

        return finalList;
    }
}
