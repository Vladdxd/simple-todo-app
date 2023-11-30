import classNames from 'classnames'
import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

const Check = ({ isComplete }) => {
    return (
        <div
            className={classNames('w-7 h-7 border-2 border-pink-400 border-solid rounded-lg mr-2 flex-shrink-0', {
                'bg-pink-400': isComplete
            })}
        >
            {isComplete && <IoCheckmarkSharp size={24} />}
        </div>
    )
}

export default Check
