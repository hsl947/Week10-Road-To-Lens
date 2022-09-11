/*
 * @Author: hsl947 1506070803@qq.com
 * @Date: 2022-09-11 21:07:13
 * @LastEditors: hsl947 1506070803@qq.com
 * @LastEditTime: 2022-09-11 21:07:33
 * @FilePath: \Week10-Road-To-Lens\apollo-client.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.lens.dev",
    cache: new InMemoryCache(),
});

export default client;
