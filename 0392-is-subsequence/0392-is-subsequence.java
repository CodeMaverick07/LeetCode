class Solution {
    public boolean isSubsequence(String s, String t) {
        int l = s.length();
        int k = t.length();
        int i = 0;
        int j = 0;


        while (l > i && j < k){
            char a = s.charAt(i);
            char b = t.charAt(j);
            System.out.println(a+" "+i+" "+b+" "+j);
            if (a == b) {
            i++;
            j++;
            } 
            if (a!=b){
            j++;
            }    
        }
        if (l<=i) return true;
        return false;    
    }
}