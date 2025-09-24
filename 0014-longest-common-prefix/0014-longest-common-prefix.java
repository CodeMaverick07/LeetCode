class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";
        if (strs.length ==1) return strs[0];
        String prefix = strs[0];
       for (int i = 1; i < strs.length; i++){
        String curr = strs[i];
        int j = 0;
        while (j < prefix.length() && j<curr.length() && prefix.charAt(j) == curr.charAt(j) ){
            j++;
        }
        prefix = prefix.substring(0,j);
        if (prefix.isEmpty()) return "";
       }
       return prefix;
    }
}