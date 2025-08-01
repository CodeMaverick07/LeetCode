class Solution {
    public boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]","").toLowerCase();
        int l = s.length();
        int i = 0;
        int j = l-1;
        System.out.println(s);
        while ( j > i ){
            char c = s.charAt(i++);
            char d = s.charAt(j--);
            if (c != d){
                return false;
            } 
        }
        return true;
    }
}