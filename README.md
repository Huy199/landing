## Quy tắc code

### 1. Quy tắc chia component
- Mỗi một Component được chia ra 1 folder gồm: (ví dụ xem ở `src/component/BaseButton`)
  - 1 file View (viết jsx)
  - 1 file Hook của component đó để xử lý các logic (đặt tên theo tên Component + Hook ở cuối)
  - Các Component sử dụng chung thì đặt ở trong folder `src/component`
  - Các Component riêng của từng page thì đặt ở folder tên **page name + Components: vd page=/student => folder: `studentComponents`**

### 2. Quy tắc viết code
*Như đã nói mỗi Component sẽ được chia làm 2 file (file View và file Hook).
- Phần lớn sẽ code sẽ được viết theo thứ tự (một vài trường hợp đặc biết có thể viết khác thứ tự): 
  1. Custom Hook
  2. useState, useReducer
  3. useMemo
  4. useCallback
  5. useLayoutEffect, useEffect **(bắt buộc ở cuối)**
- Sử dụng hook nào thì import hook đó không sử dụng import global:
  - ví dụ: dùng useState <br />
    &#x2611; import {useState} from "react"; <br />
    &#9746; import React from "react";
