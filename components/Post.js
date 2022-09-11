/*
 * @Author: hsl947 1506070803@qq.com
 * @Date: 2022-09-11 21:23:46
 * @LastEditors: hsl947 1506070803@qq.com
 * @LastEditTime: 2022-09-11 21:35:07
 * @FilePath: \Week10-Road-To-Lens\components\Post.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// components/Post.js
export default function Post(props) {
  const post = props.post;

  return (
    <div className="p-2">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <p className="mt-2 text-xs text-slate-500 whitespace-pre-line">
              {post.metadata.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
