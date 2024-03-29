import { deleteDoc, getDoc } from 'firebase/firestore';
import { isCreateModalOpen } from '../../../stores/createModalStore';
import { editBlogStore } from '../../../stores/editBlogStore';
import { getDocRef } from '../../../utils/getBlogRef';
import { ActionButton } from './ActionButton';

type Props = {
  blogId: string;
};

export const Actions = ({ blogId }: Props) => {
  const handleDeleteBlog = async () => {
    try {
      const docRef = getDocRef(blogId);
      await deleteDoc(docRef);
      window.location.reload();
    } catch (error) {
      console.error('Error during deletion: ' + error);
    }
  };

  const handleEditBlog = async () => {
    try {
      const docRef = getDocRef(blogId);
      const docData = await getDoc(docRef);
      if (!docData.data()) {
        return console.error('Error, no doc data available');
      }
      editBlogStore.set({ ...docData.data(), blogId });
      isCreateModalOpen.set(true);
    } catch (error) {
      console.error('Error during editing: ' + error);
    }
  };

  return (
    <div className="admin-actions flex gap-x-2">
      <ActionButton onClick={handleDeleteBlog}>Zmazat blog</ActionButton>
      <ActionButton onClick={handleEditBlog}>Upravit blog</ActionButton>
    </div>
  );
};
