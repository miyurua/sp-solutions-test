package org.example.problem1;

public class SumCalculator {

    public static void main(String[] args) {
        int[] list = {12, 33, 35, 12, 55};

        System.out.println(usingForLoop(list));
        System.out.println(usingWhileLoop(list));
        System.out.println(usingRecursion(list));
    }

    private static int usingForLoop(int[] list){
        int sum = 0;

        for(int i=0; i<list.length; i++ ){
            sum += list[i];
        }

        return sum;
    }

    private static int usingWhileLoop(int[] list){
        int sum = 0;
        int counter = 0;

        while(counter < list.length){
            sum += list[counter];
            counter += 1;
        }

        return sum;
    }

    private static int usingRecursion(int[] list){
        int sum = 0;

        for (int item: list){
            sum+=item;
        }

        return sum;
    }
}
