import React from 'react'
import { Avatar, CardHeader } from '@material-ui/core'

const MirHeader = ({ headers }) => {
    return (
        <CardHeader
            avatar={
                <Avatar alt="" src="https://yt3.ggpht.com/ytc/AKedOLRAPZLAzlT7sqxT2cxsX1AEsOgUIinaNlVigDNVzw=s900-c-k-c0x00ffffff-no-rj" />
            }
            title={headers.title}
            subheader={headers.subheader}

        />
    )
}

export default MirHeader