import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        int l = s.length();

        for (int i = 0; i < l; i++) {
            char ch = s.charAt(i);

            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            }
            else if (ch == ')' || ch == ']' || ch == '}') {
                if (stack.isEmpty()) return false;

                char top = stack.peek();
                if ((ch == ')' && top == '(') ||
                    (ch == ']' && top == '[') ||
                    (ch == '}' && top == '{')) {
                    stack.pop();
                } else {
                    return false; 
                }
            }
        }
        return stack.isEmpty();
    }
}