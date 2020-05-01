import rospy, sys
import time
from xbot_control.srv import Mode, ModeResponse

rate = rospy.Rate(10) # 10Hz
flag=False #time flag

def _ctl_mode():
    rospy.wait_for_service('mode')
    try:
        ctl_mode = rospy.ServiceProxy('mode', Mode)
        resp1 = ctl_mode(1)
        return resp1.result
    except rospy.ServiceException, e:
        print "Service call failed: %s"%e

while not rospy.is_shutdown():
    if flag == False:
        flag =  _ctl_mode()
    elif flag == True:
        sys.exit()
    rate.sleep()

