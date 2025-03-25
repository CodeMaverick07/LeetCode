import java.util.*;

class Solution {
    static class Pair {
        int first, second;
        Pair(int first, int second) {
            this.first = first;
            this.second = second;
        }
    }

    private boolean countLineIntersections(List<Pair> coordinates) {
        int overlap = 0;
        int lines = 0;
        boolean inSegment = false;

        for (Pair coord : coordinates) {
            if (coord.second == 1) { 
                overlap++;
                if (!inSegment) {
                    lines++;
                    inSegment = true;
                }
            } else { 
                overlap--;
                if (overlap == 0) {
                    inSegment = false;
                }
            }
        }
        return lines >= 3;
    }

    public boolean checkValidCuts(int n, int[][] rectangles) {
        List<Pair> yCoordinates = new ArrayList<>();
        List<Pair> xCoordinates = new ArrayList<>();

        for (int[] rectangle : rectangles) {
            yCoordinates.add(new Pair(rectangle[1], 1));
            yCoordinates.add(new Pair(rectangle[3], 0));
            xCoordinates.add(new Pair(rectangle[0], 1));
            xCoordinates.add(new Pair(rectangle[2], 0));
        }

        yCoordinates.sort((a, b) -> a.first == b.first ? Integer.compare(a.second, b.second) : Integer.compare(a.first, b.first));
        xCoordinates.sort((a, b) -> a.first == b.first ? Integer.compare(a.second, b.second) : Integer.compare(a.first, b.first));

        return countLineIntersections(yCoordinates) || countLineIntersections(xCoordinates);
    }
}