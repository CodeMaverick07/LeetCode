class Solution {
    public int lengthOfLastWord(String s) {
        boolean trimDone = false;
        int count = 0;
        for (int i = s.length()-1; i >= 0; i--){
            if (s.charAt(i)!= ' '){
                count++;
                trimDone = true;
            } else if (trimDone) return count;
        }
        return count;
    }
}