export const FriendList = friends => {
    return (
        <li class="item" key = {id}>
  <span class="status">isOnline ? "Online" : "offline" </span>
  <img class="avatar" src={avatar} alt={'name'} width="48" />
  <p class="name"> {'name'}</p>
</li>
    )
}