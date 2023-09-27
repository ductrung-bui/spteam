import farm from './assets/farm.jpeg'
import nhietDo from './assets/Nhietdo.png'
import nuocSong from './assets/nuocSong.jpeg'


function Component() {

    return (
        <div style={{ textAlign: 'left', padding: "50px 50px" }}>
            <img src={farm} style={{ width: "300px", height: "150px" }} />
            <div style={{ fontSize: "24px", fontWeight: "700" }}>
                Farm
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur.
            </div>
            <div style={{ marginLeft: "30px" }}>
                <div>
                    <div style={{ display: "flex", alignItems: "center", fontSize: "30px" }}>
                        <img src={nhietDo} style={{ widows: "30px", height: "30px" }} />
                        <div style={{ color: "red" }}>29.5</div>
                    </div>
                </div>
                <div>
                    <img src={nuocSong} style={{ widows: "30px", height: "30px" }} />
                </div>
            </div>
            <button>Details</button>
        </div>
    )
}

export default Component