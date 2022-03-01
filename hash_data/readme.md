## hash 表
hash函数 key
如何解决hash冲突
1，开放寻址法：
线性寻址法：hash(key)+n 同样的key生成的hash可以存储在不同的位置
二次探测法：hash(key)+n*n
双层hash法：hash1(key),hash2(key),hash3(key) ,一个key对应多个存储位置
2.链表法： 一个hash值，后面存储一个链表结构数据