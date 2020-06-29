use super::*;

#[test]
fn set_curator_group_status_success() {
    with_test_externalities(|| {
        // Add curator group
        assert_ok!(add_curator_group(LEAD_ORIGIN));

        // Runtime tested state before call

        // Events number before tested call
        let number_of_events_before_call = System::events().len();

        // Change curator group status
        assert_ok!(set_curator_group_status(
            LEAD_ORIGIN,
            FIRST_CURATOR_GROUP_ID,
            true
        ));

        // Runtime tested state after call

        // Ensure curator group status changed
        let mut curator_group = CuratorGroup::default();
        curator_group.set_status(true);
        assert_eq!(curator_group_by_id(FIRST_CURATOR_GROUP_ID), curator_group);

        let curator_group_status_set_event = get_test_event(RawEvent::CuratorGroupStatusSet(
            FIRST_CURATOR_GROUP_ID,
            true,
        ));

        // Event checked
        assert_event_success(
            curator_group_status_set_event,
            number_of_events_before_call + 1,
        );
    })
}
